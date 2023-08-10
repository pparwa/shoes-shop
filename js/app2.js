const shoes =
[
    {id:'man',note:'Sneakers (US) or trainers (UK), also known by a wide variety of other names, are shoes primarily designed for sports or other forms of physical exercise but which are also widely used for everyday casual wear.' ,src:'../image/man1.webp',price:'600/000'},
    {id:'woman',note:'Vans adalah produsen sepatu skateboard asal Amerika Serikat dan juga memproduksi pakaian terkait, berbasis di California dan perusahaan ini sendiri dimiliki oleh VF Corporation.' ,src:'../image/child1.jpg',price:'550/000'},
    {id:'child',note:'A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection.' ,src:'../image/women1.jpg',price:'800/000'}


]
window.addEventListener('load',()=>{
    let loc = location.search
    let searchid = new URLSearchParams(loc)
    let proid = searchid.get('id')

    let obj = shoes.find((shoe)=>
    { 
        if(shoe.id == proid)
        {
            return shoe
        }

    })
    let box = document.getElementById('box')
    console.log(box)
    console.log(obj)
    box.insertAdjacentHTML('beforeend', '<img src='+obj.src+'></img>')
    let box2 = document.getElementById('pro')
    box2.insertAdjacentHTML('beforeend','<p>'+ obj.note+'</p>')
    box2.insertAdjacentHTML('beforeend',' <button class="btn btn-warning">pay</button>')
    
})
const btn = document.getElementById('back')
btn.addEventListener('click',function()
{
    history.back()
})
