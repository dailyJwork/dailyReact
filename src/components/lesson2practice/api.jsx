import axios from "axios";

axios.defaults.baseURL = "https://67c04c97b9d02a9f224926be.mockapi.io/";

export const fetchQuizzez = async () => {
    const responce = await axios.get('/quiz');
    return responce.data;
}

export const addNewQuizz = async (newQuiz) => {
    const responce = await axios.post("/quiz", newQuiz);
    return responce.data;
}

export const deleteQuizById = async (quizId) => {
    const responce = await axios.delete(`/quiz/${quizId}`);
    return responce.data;
}

export const updateQuiz = async (update, quizId) => {
    const responce = await axios.put(`/quiz/${quizId}`, update);
    return responce.data;
}