import { createServerFn } from "@tanstack/react-start";

const LEETCODE_USERNAME = "30aYsYXBXU";

const QUERY = `query userStats($u: String!) {
  matchedUser(username: $u) {
    username
    profile { ranking reputation }
    submitStatsGlobal { acSubmissionNum { difficulty count } }
  }
  userContestRanking(username: $u) {
    rating
    globalRanking
    attendedContestsCount
    topPercentage
  }
  allQuestionsCount { difficulty count }
}`;

export type LeetCodeStats = {
  username: string;
  profileUrl: string;
  ranking: number | null;
  solved: { all: number; easy: number; medium: number; hard: number };
  total: { all: number; easy: number; medium: number; hard: number };
  contest: {
    rating: number | null;
    globalRanking: number | null;
    attended: number | null;
    topPercentage: number | null;
  };
  error?: string;
};

type Bucket = { difficulty: string; count: number };

function pick(list: Bucket[] | undefined, difficulty: string) {
  return list?.find((b) => b.difficulty === difficulty)?.count ?? 0;
}

const EMPTY: LeetCodeStats = {
  username: LEETCODE_USERNAME,
  profileUrl: `https://leetcode.com/u/${LEETCODE_USERNAME}/`,
  ranking: null,
  solved: { all: 0, easy: 0, medium: 0, hard: 0 },
  total: { all: 0, easy: 0, medium: 0, hard: 0 },
  contest: { rating: null, globalRanking: null, attended: null, topPercentage: null },
};

export const getLeetCodeStats = createServerFn({ method: "GET" }).handler(
  async (): Promise<LeetCodeStats> => {
    try {
      const response = await fetch("https://leetcode.com/graphql", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          referer: "https://leetcode.com",
        },
        body: JSON.stringify({ query: QUERY, variables: { u: LEETCODE_USERNAME } }),
      });

      if (!response.ok) {
        const body = await response.text();
        console.error(`LeetCode request failed [${response.status}]: ${body}`);
        return { ...EMPTY, error: "Live stats unavailable" };
      }

      const payload = (await response.json()) as {
        data?: {
          matchedUser?: {
            username: string;
            profile?: { ranking: number | null };
            submitStatsGlobal?: { acSubmissionNum?: Bucket[] };
          } | null;
          userContestRanking?: {
            rating: number | null;
            globalRanking: number | null;
            attendedContestsCount: number | null;
            topPercentage: number | null;
          } | null;
          allQuestionsCount?: Bucket[];
        };
      };

      const user = payload.data?.matchedUser;
      if (!user) return { ...EMPTY, error: "Profile not found" };

      const solvedList = user.submitStatsGlobal?.acSubmissionNum;
      const totalList = payload.data?.allQuestionsCount;
      const contest = payload.data?.userContestRanking ?? null;

      return {
        username: user.username,
        profileUrl: `https://leetcode.com/u/${user.username}/`,
        ranking: user.profile?.ranking ?? null,
        solved: {
          all: pick(solvedList, "All"),
          easy: pick(solvedList, "Easy"),
          medium: pick(solvedList, "Medium"),
          hard: pick(solvedList, "Hard"),
        },
        total: {
          all: pick(totalList, "All"),
          easy: pick(totalList, "Easy"),
          medium: pick(totalList, "Medium"),
          hard: pick(totalList, "Hard"),
        },
        contest: {
          rating: contest?.rating ?? null,
          globalRanking: contest?.globalRanking ?? null,
          attended: contest?.attendedContestsCount ?? null,
          topPercentage: contest?.topPercentage ?? null,
        },
      };
    } catch (error) {
      console.error("LeetCode stats fetch error", error);
      return { ...EMPTY, error: "Live stats unavailable" };
    }
  },
);
