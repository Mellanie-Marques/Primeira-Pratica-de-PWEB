class DisciplinaRepositorio{
    constructor() {
        this._disciplinas = [];
    }

    inserir(disciplina) {
        this._disciplinas.push(disciplina);
        return disciplina;
    }

    pesquisarDisciplinaPorNome(nome) {
        return this._disciplinas.filter(disciplina => disciplina.nome === nome);
    }

    remover(nome) {
        const indxRemocao = this._disciplinas.indexOf(disciplina => disciplina.nome === nome);
        this._disciplinas.splice(indxRemocao, 1);
    }

    listar() {
        return this._alunos;
    }

}