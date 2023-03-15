class Disciplina{
    constructor(id, nome,) {
        this.id = id;
        this._nome = nome;
        this._aluno = [];
    }

    get id() {
        return this.id;
    }
    
    set id(nomoId){
        return this.id;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    inserirAlunoNaDisciplina(aluno) {
        this._alunos.push(aluno);
        return aluno;
    }
}