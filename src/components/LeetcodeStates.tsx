"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, BarChart2 } from "lucide-react";

interface LeetCodeData {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking?: number;
}

const LeetCodeStats: React.FC = () => {
  const [stats, setStats] = useState<LeetCodeData | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(
          `https://leetcode-stats-api.herokuapp.com/shambho_1001`
        );
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error("Failed loading LeetCode stats", err);
      }
    };
    fetchStats();
  }, []);

  if (!stats) return null;

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } } };
  const item = { hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } };

  return (
    <section className="py-12 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container} className="max-w-6xl mx-auto">
          <motion.div variants={item} className="text-center mb-16">
            <h2 className="responsive-text-6xl font-display font-bold mb-6 gradient-text">
              LeetCode Stats
            </h2>
            <p className="responsive-text-xl text-muted-foreground">
              Live coding stats right from my profile.
            </p>
          </motion.div>
          <motion.div variants={item} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Solved", icon: BarChart2, val: stats.totalSolved },
              { label: "Easy", icon: Activity, val: stats.easySolved },
              { label: "Medium", icon: Activity, val: stats.mediumSolved },
              { label: "Hard", icon: Activity, val: stats.hardSolved },
            ].map(({ label, icon: Icon, val }) => (
              <motion.div key={label} variants={item} whileHover={{ scale: 1.05 }}>
                <Card className="glass-card border border-primary/20 card-3d p-6 text-center">
                  <CardContent className="flex flex-col items-center gap-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="responsive-text-2xl font-display font-bold text-foreground">
                      {val}
                    </div>
                    <div className="responsive-text-sm text-muted-foreground">
                      {label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={item}>
            <Card className="glass-card border border-primary/20 p-4">
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="responsive-text-2xl font-display font-bold text-foreground">
                    Activity Heatmap
                  </h3>
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    Last 12 Months
                  </Badge>
                </div>
                <div className="rounded-lg overflow-hidden">
                  {/* heatmap image or component, simple img tag */}
                  <img
                    src={`https://leetcode-stats.vercel.app/api/activity/shambho_1001`}
                    alt="LeetCode Activity Heatmap"
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
      {/* Background flares */}
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default LeetCodeStats;
