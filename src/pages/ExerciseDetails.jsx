import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { FetchData, exerciseOptions, YoutubeOptions } from "../utils/FetchData";
import Details from "../components/Details";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseURL = `https://exercisedb.p.rapidapi.com`;
      const youtubeSearchURL = `https://youtube-search-and-download.p.rapidapi.com`;

      const exerciseDetailData = await FetchData(
        `${exerciseURL}/exercises/exercise/${id}`,
        exerciseOptions
      );

      console.log(exerciseDetailData);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await FetchData(
        `${youtubeSearchURL}/search?query=${exerciseDetail.name} exercise`,
        YoutubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await FetchData(
        `${exerciseURL}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await FetchData(
        `${exerciseURL}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equimentExercisesData);
    };

    fetchExerciseData();
  }, [id]);
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetails;
