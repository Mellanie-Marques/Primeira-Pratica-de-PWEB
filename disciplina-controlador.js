class DisciplinaControlador{
    constructor() {
        this.disciplinaControlador = new DisciplinaControlador();
    }

    inserir() {
        const idDisciplina = document.querySelector("#id").value;
        const nomeDisciplina = Number(document.querySelector("#nome").value);
        const disciplina = this.disciplinaServico.inserir(idDisciplina, nomeDisciplina);
        if (disciplina) {
            this.mostrarDisciplinaNoHTML(idDisciplina, nomeDisciplina);
            alert('Disciplina inserida com sucesso!');
        } else {
            alert('Disciplina já cadastrada!');
        }
    }

    mostrarAlunoNoHTML(id, nome) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `${id} - ${nome}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
                this.removerDisciplinaDaLista(nome);
                event.target.parentElement.remove();
            }
        );
        elementoP.appendChild(elementoBotaoApagar);
        document.body.appendChild(elementoP);
    }

    removerDisciplinaDaLista(nome) {
        this.disciplinaServico.remover(nome);
    }

}