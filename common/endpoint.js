module.exports = {
    score : '/api/score', /* scores individuais GET recebe, POST adiciona/modifica */
    ranking : '/api/ranking',/* api do ranking GET recebe ranking */
    insertScore : '/api/insertScore',/* api para inserir score. Apenas POST */
    getRanking : '/api/getRanking', /* api para receberRanking. Apenas GET */
    editScore: '/api/editScore' /* api para editar uma nota. Apenas POST */
};
