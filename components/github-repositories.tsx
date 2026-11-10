"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { StarIcon, CodeBracketIcon, ArrowTopRightOnSquareIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
  fork: boolean;
}

const GITHUB_USERNAME = "Zohaib-Ali-Arif";
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

// Repositories to exclude from portfolio display
const EXCLUDED_REPOS: string[] = [
  "Zohaib-Ali-Arif.github.io", // This portfolio repo itself
 
];

// Professional descriptions for projects
const repoDescriptions: Record<string, string> = {
  default: "Source code and engineering work from my GitHub profile.",
};

export default function GitHubRepositories() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setLoading(true);
        const headers: Record<string, string> = {
          Accept: "application/vnd.github.v3+json",
        };

        // Use a public token if provided to increase rate limits
        if (typeof process !== "undefined" && (process.env as any).NEXT_PUBLIC_GITHUB_TOKEN) {
          headers["Authorization"] = `token ${(process.env as any).NEXT_PUBLIC_GITHUB_TOKEN}`;
        }

        const response = await fetch(`${GITHUB_API_URL}?sort=updated&per_page=30&type=owner`, {
          headers,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const data: GitHubRepo[] = await response.json();
        
        // Filter out forked repos, excluded repos, and sort by stars
        const filteredRepos = data
          .filter(repo => !repo.fork && !EXCLUDED_REPOS.includes(repo.name))
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 10); // Limit to top 10

        setRepos(filteredRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  const getLanguageColor = (language: string | null): string => {
    const colors: Record<string, string> = {
      TypeScript: "bg-blue-500",
      JavaScript: "bg-yellow-500",
      Python: "bg-blue-600",
      "C++": "bg-pink-600",
      C: "bg-blue-700",
      Java: "bg-orange-600",
      "Go": "bg-cyan-500",
      Rust: "bg-orange-700",
      HTML: "bg-orange-500",
      CSS: "bg-purple-500",
      Embedded: "bg-red-500",
    };
    return colors[language || ""] || "bg-gray-500";
  };

  const getRepoDescription = (repoName: string, originalDescription: string | null): string => {
    return repoDescriptions[repoName] || originalDescription || repoDescriptions["default"];
  };

  const totalPages = Math.ceil(repos.length / itemsPerPage);
  
  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const getCurrentProjects = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const projectsArray = [];
    
    // Handle circular rotation
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (startIndex + i) % repos.length;
      projectsArray.push(repos[index]);
    }
    
    return projectsArray;
  };

  return (
    <section id="github" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Open Source Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Explore my professional repositories and contributions
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {loading && (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        )}

        {error && (
          <div className="text-center text-red-600 dark:text-red-400 min-h-[400px] flex items-center justify-center">
            <p>Unable to load repositories. Please try again later.</p>
          </div>
        )}

        {!loading && !error && repos.length > 0 && (
          <div className="space-y-12">
            {/* 3-Column Carousel */}
            <div className="relative">
              {/* 3-Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 auto-rows-max">
                {getCurrentProjects().map((repo, index) => (
                  <motion.a
                    key={`${currentPage}-${index}`}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -8 }}
                    className="group"
                  >
                    <div className="h-full p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-primary/50 hover:shadow-xl flex flex-col">
                      {/* Header with Icon */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300 line-clamp-2">
                            {repo.name.replace(/-/g, " ")}
                          </h3>
                        </div>
                        <div className="ml-3 flex-shrink-0 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                          <CodeBracketIcon className="h-6 w-6 text-primary" />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 line-clamp-3 flex-grow leading-relaxed">
                        {getRepoDescription(repo.name, repo.description)}
                      </p>

                      {/* Topics/Tags */}
                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {repo.topics.slice(0, 3).map((topic) => (
                            <span
                              key={topic}
                              className="text-xs px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary rounded-full font-medium hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Footer Section */}
                      <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        {/* Language & Stars */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {repo.language && (
                              <div className="flex items-center gap-2">
                                <span
                                  className={`inline-block w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}
                                ></span>
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                  {repo.language}
                                </span>
                              </div>
                            )}
                          </div>

                          {repo.stargazers_count > 0 && (
                            <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/20 px-3 py-1 rounded-full">
                              <StarIcon className="h-4 w-4 text-yellow-500" />
                              <span className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">
                                {repo.stargazers_count}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Updated Date & Link */}
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Updated {new Date(repo.updated_at).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric"
                            })}
                          </p>
                          <ArrowTopRightOnSquareIcon className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Bottom Right Navigation */}
              <div className="flex items-center justify-end gap-3">
                {/* Navigation Buttons */}
                <motion.button
                  onClick={handlePrevPage}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label="Previous projects"
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                </motion.button>

                <motion.button
                  onClick={handleNextPage}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label="Next projects"
                >
                  <ChevronRightIcon className="h-5 w-5" />
                </motion.button>
              </div>
            </div>

            {/* View All Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center pt-8"
            >
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-primary/90 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                View All Repositories on GitHub
                <ArrowTopRightOnSquareIcon className="h-5 w-5" />
              </a>
            </motion.div>
          </div>
        )}

        {!loading && !error && repos.length === 0 && (
          <div className="text-center text-gray-600 dark:text-gray-400 min-h-[400px] flex items-center justify-center">
            <p>No repositories found</p>
          </div>
        )}
      </div>
    </section>
  );
}
