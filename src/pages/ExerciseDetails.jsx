import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { FetchData, exerciseOptions } from "../utils/FetchData";
import Details from "../components/Details";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseURL = `https://exercisedb.p.rapidapi.com`;
      const youtubeSearchURL = `https://youtube-search-and-download.p.rapidapi.com/channel/about`;

      const exerciseDetailData = await FetchData(
        `${exerciseURL}/exercises/exercise/${id}`,
        exerciseOptions
      );

      console.log(exerciseDetailData);
      setExerciseDetail(exerciseDetailData);
    };

    fetchExerciseData();
  }, [id]);
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetails;
