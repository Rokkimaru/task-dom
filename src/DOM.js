/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        let div = document.createElement(tag);
        div.innerHTML = content;
        document.body.append(div);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    function add_node(count, deep) {
        let result = document.createElement('div');
        result.classList.add(`item_${deep}`);
        if (deep < level) {
            for (let i = 0; i < count; i++) {
                result.append(add_node(childrenCount, deep + 1));
            }
        }
        return result;
    }

    return add_node(childrenCount, 1);
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let result = generateTree(2, 3);

    result.childNodes.forEach((el) => {
        if (el.className == 'item_2') {
            let childs = el.childNodes;
            let replacement = document.createElement('section');
            replacement.classList.add('item_2');
            Array.from(childs).forEach((elem) => {
                replacement.append(elem);
            });
            el.replaceWith(replacement);
        }
    });

    return result;
}
