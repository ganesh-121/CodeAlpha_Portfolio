import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiStar, FiGitBranch, FiCode, FiUsers, FiLoader } from 'react-icons/fi';
import { SiCodechef } from 'react-icons/si';

// GitHub user data — fetched via GitHub API
function useGitHubStats(username) {
  const [data, setData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch_ = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=6`),
        ]);
        if (!userRes.ok) throw new Error('GitHub API rate limited or user not found');
        const userData = await userRes.json();
        const reposData = await reposRes.json();
        setData(userData);
        setRepos(Array.isArray(reposData) ? reposData : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetch_();
  }, [username]);

  return { data, repos, loading, error };
}

export default function CodingProfiles() {
  const { data: ghData, repos, loading: ghLoading, error: ghError } = useGitHubStats('ganesh-121');

  const PROFILES = [
    {
      platform: 'GitHub',
      icon: FiGithub,
      username: 'ganesh-121',
      href: 'https://github.com/ganesh-121',
      color: '#94A3B8',
      gradient: 'from-slate-900/60 to-slate-800/40',
      desc: 'Open source contributions & personal projects',
      stats: ghData ? [
        { label: 'Public Repos', value: ghData.public_repos },
        { label: 'Followers', value: ghData.followers },
        { label: 'Following', value: ghData.following },
      ] : null,
    },
    {
      platform: 'LinkedIn',
      icon: FiLinkedin,
      username: 'mahanty-ganesh-59747331b',
      href: 'https://www.linkedin.com/in/mahanty-ganesh-59747331b',
      color: '#0A66C2',
      gradient: 'from-blue-950/60 to-blue-900/30',
      desc: 'Professional network & career opportunities',
      stats: [
        { label: 'Connections', value: '100+' },
        { label: 'Endorsements', value: '10+' },
        { label: 'Profile Views', value: '500+' },
      ],
    },
    {
      platform: 'CodeChef',
      icon: SiCodechef,
      username: 'ganesh5658',
      href: 'https://www.codechef.com/users/ganesh5658',
      color: '#8B5CF6',
      gradient: 'from-violet-950/60 to-purple-900/30',
      desc: 'Competitive programming & problem solving',
      stats: [
        { label: 'Problems Solved', value: '100+' },
        { label: 'Contests', value: '10+' },
        { label: 'Rating', value: '★★' },
      ],
    },
  ];

  return (
    <section id="coding-profiles" className="py-24 relative z-10">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-tag"><span>💻</span> Coding Profiles</span>
          <h2 className="section-title mb-4">
            Where I <span className="gradient-text">Code</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Find me on these platforms — where I build, practice, and connect
          </p>
        </div>

        {/* Profile Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {PROFILES.map((profile, i) => (
            <motion.div
              key={profile.platform}
              className={`coding-card glass-card bg-gradient-to-br ${profile.gradient}`}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              whileHover={{ y: -6 }}
              style={{ borderColor: `${profile.color}25` }}
            >
              {/* Platform header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${profile.color}20`, border: `1px solid ${profile.color}40` }}
                  >
                    <profile.icon size={22} style={{ color: profile.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{profile.platform}</h3>
                    <p className="text-xs text-slate-500">@{profile.username}</p>
                  </div>
                </div>
                <a
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                  style={{ background: `${profile.color}15`, border: `1px solid ${profile.color}25` }}
                >
                  <FiCode size={14} />
                </a>
              </div>

              <p className="text-slate-500 text-sm mb-5 leading-relaxed">{profile.desc}</p>

              {/* Stats */}
              {profile.platform === 'GitHub' && ghLoading ? (
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <FiLoader size={14} className="animate-spin" /> Loading GitHub stats...
                </div>
              ) : profile.stats ? (
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {profile.stats.map(stat => (
                    <div key={stat.label} className="text-center p-2 rounded-lg" style={{ background: `${profile.color}08` }}>
                      <div className="font-bold text-white text-sm">{stat.value}</div>
                      <div className="text-slate-600 text-xs mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              ) : null}

              <a
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2.5 rounded-xl text-sm font-semibold transition-all"
                style={{
                  background: `${profile.color}20`,
                  border: `1px solid ${profile.color}35`,
                  color: profile.color,
                }}
              >
                View Profile →
              </a>
            </motion.div>
          ))}
        </div>

        {/* GitHub Repos */}
        {!ghLoading && !ghError && repos.length > 0 && (
          <div data-aos="fade-up">
            <h3 className="font-display font-bold text-white text-xl mb-6 flex items-center gap-2">
              <FiGithub size={20} className="text-slate-400" />
              Recent Repositories
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.map(repo => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 block"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-slate-200 text-sm truncate">{repo.name}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-500 border border-white/5 ml-2 flex-shrink-0">
                      {repo.visibility}
                    </span>
                  </div>
                  {repo.description && (
                    <p className="text-slate-500 text-xs leading-relaxed mb-3 line-clamp-2">{repo.description}</p>
                  )}
                  <div className="flex items-center gap-4 text-xs text-slate-600">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-violet-500" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <FiStar size={11} /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiGitBranch size={11} /> {repo.forks_count}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        )}

        {ghError && (
          <p className="text-slate-600 text-sm text-center py-4">
            GitHub repos could not be loaded (API rate limit). 
            <a href="https://github.com/ganesh-121" target="_blank" rel="noopener noreferrer" className="text-violet-400 ml-1 hover:underline">
              View on GitHub →
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
