const lis=40; //константа хранящаяя количество элементов для загрузки
let count=lis;//счетчик элементов
let timeout = false;
let last_stop = 0;//величина прокрутки в момент последней остановки


window.onscroll =()=> {//событие срабатывающее при остановке прокрутки
    if (timeout !== false)
        clearTimeout(timeout);

    timeout = setTimeout(()=> {
        if(pageYOffset>last_stop)scrolldown(last_stop);else scrollup();//проверка была прокрутка вверх или вниз
        last_stop = pageYOffset;// установка значения последней остановки
    }, 300);
};



/** Функция одновременно загружающая скрытые элементы и удаляющая элементы которые находятся внизу далеко за границей экрана,
 *  Вызывается при прокрутке вверх;
 *
 */
let scrollup=()=>{

    let cc = count;// приравнивание промежуточной переменной cc значение счетчика
    count = Math.floor(pageYOffset/50)+20;//определение сколько элементов должно быть загружено и установка счетчику это значение
    for(let i=0;i<=60+1;i++)//цикл загрузки элементов скрытых ранее при прокрутке вниз
    {
        if(count<=0)count=1; //проверка дошел ли счетчик до нуля

        show_li(count);
        count=count-1;
    }
    count=count+60;
    while(cc>count)
    {

        remove_li(cc);
        cc=cc-1;
    }

}
/** Функция одновременно скрывающая элементы выше и создающая элементы снизу.
 *  Вызывается при прокрутке вниз;
 *
 * @param ls значение последней остановки прокрутки
 */
let scrolldown=(ls)=>
{
alert('down');
    let  cc = Math.floor(pageYOffset/50);
    ls=Math.floor(ls/50);
    let ccc=cc-ls;
    for(let i=0;i<=ccc;i++)
    {
        count=count+1;
        if(count>200)
        {
            let hide_id=count-200;
            hide_li(hide_id);
        }
        create_li(count);
    }
}

/**
 * Функция создания элемента списка;
 * @param id аргумент используемый в качестве ИД нового элемента
 */
let create_li=(id)=>
{
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.setAttribute("id", id);
    li.appendChild(document.createTextNode(id));
    ul.appendChild(li);
}
/**
 * Функция скрытия элементов
 * @param id аргумент используемый в качестве ИД скрываемого элемента
 */

let hide_li=(id)=>
{
    let li = document.getElementById(id);
    li.setAttribute("class", 'hidden');
}
/**
 * Функция отмены скрытия элемента
 * @param id аргумент используемый в качестве ИД скрытого элемента
 */

let show_li=(id)=>
{

    let li = document.getElementById(id);
    if(li.getAttribute('class')=='show')return;
    li.setAttribute("class", 'show');
}

/**
 * Функция удаления элемента списка
 * @param id аргумент используемый в качестве ИД удаляемого элемента
 */
let remove_li=(id)=>
{   let ul = document.getElementById("list");
    let li = document.getElementById(id);
    ul.removeChild(li);
}