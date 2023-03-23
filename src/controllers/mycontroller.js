exports.post = (req, res, next) => {
    res.status(201).send('Requisição post recebida com sucesso!');
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição put recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição delete recebida com sucesso! ${id}`);
};