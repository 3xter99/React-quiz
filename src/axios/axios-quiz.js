import Axios from "axios";

export default Axios.create({
    baseURL: 'https://react-quiz-df522.firebaseio.com/'
})
