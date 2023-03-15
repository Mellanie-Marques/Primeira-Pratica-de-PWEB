class DesciplinaServico{
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(id, nome) {
        const disciplina = new disciplina(id, nome);
        return undefined;
    }

    remover(nome) {
        this.repositorio.remover(nome);
    }

    listar() {
        return this.repositorio.listar();
    }

    buscarPorNome(nome) {
        return this.repositorio.buscarPorNome(nome);
    }

}