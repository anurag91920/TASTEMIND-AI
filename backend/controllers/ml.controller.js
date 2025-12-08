import { recommendForUser } from "../ml/recommender.js";
import { forecastDemand } from "../ml/forecast.js";

export const getRecommendations = async (req, res) => {
  const { id } = req.user;
  const data = await recommendForUser(id);
  res.json({ recommendations: data });
};

export const getForecast = async (req, res) => {
  const data = await forecastDemand();
  res.json({ forecast: data });
};
