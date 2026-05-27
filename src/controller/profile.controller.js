const axios = require("axios");
const prisma = require("../config/prisma");
const dotenv=require('dotenv');
dotenv.config();

const analyzeProfile = async (req, res) => {
  try {
    const { username } = req.params;

    // 1. GitHub API call
    const { data } = await axios.get(
      `${process.env.GITHUB_LINK}${username}`
    );


    const profileData = {
      username: data.login,
      name: data.name,
      bio: data.bio,
      followers: data.followers,
      following: data.following,
      publicRepos: data.public_repos,
      avatarUrl: data.avatar_url,
      profileUrl: data.html_url,
      location: data.location,
    };

    const saved = await prisma.gitHubProfile.upsert({
      where: { username: data.login },
      update: profileData,
      create: profileData,
    });

    return res.status(200).json({
      message: "Profile analyzed successfully",
      data: saved,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error analyzing profile",
      error: error.message,
    });
  }
};

// 2. Get All Profiles
const getAllProfiles = async (req, res) => {
  try {
    const profiles = await prisma.gitHubProfile.findMany();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 3. Get Single Profile
const getProfileByUsername = async (req, res) => {
  try {
    const { username } = req.params;

    const profile = await prisma.gitHubProfile.findUnique({
      where: { username },
    });

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  analyzeProfile,
  getAllProfiles,
  getProfileByUsername,
};