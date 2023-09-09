import { useEffect, useState } from 'react';
const Data = [
    {
        id:1,
        name:"guardians",
        category:"genres",
        img:"./img/img6.jpg"
    }, {
        id:2,
        name:"interstellar",
        category:"genres",
        img:"./img/img7.jpg"
    }, {
        id:3,
        name:"avengers",
        category:"genres",
        img:"./img/img8.jpg"
    }, {
        id:4,
        name:"inception",
        category:"genres",
        img:"./img/img9.jpg"
    },

    // Dad
    {
        id:5,
        name:"brahmastra",
        category:"trending",
        img:"./img/img1.png"
    }, {
        id:6,
        name:"omg",
        category:"trending",
        img:"./img/img2.webp"
    }, {
        id:7,
        name:"mission mangal",
        category:"trending",
        img:"./img/img13.jpg"
    }, {
        id:8,
        name:"ravina",
        category:"trending",
        img:"./img/img14.jpg"
    },
    //upcoming
    {
        id:6,
        name:"quantumania",
        category:"upcoming",
        img:"./img/img1.jpg"
    }, {
        id:7,
        name:"yodha",
        category:"upcoming",
        img:"./img/img2.jpg"
    }, {
        id:8,
        name:"bharat",
        category:"upcoming",
        img:"./img/img3.jpg"
    }, {
        id:9,
        name:"mission majnu",
        category:"upcoming",
        img:"./img/img5.jpg"
    },
    //favorite
    {
        id:6,
        name:"super30",
        category:"favorite",
        img:"./img/img4.jpg"
    }, {
        id:7,
        name:"chhelo divas",
        category:"favorite",
        img:"./img/img10.jpg"
    }, {
        id:8,
        name:"chhichore",
        category:"favorite",
        img:"./img/img1.webp"
    }, {
        id:9,
        name:"chal man jeetva jaiye",
        category:"favorite",
        img:"./img/img11.jpg"
    },
]
const Movie =()=>{
    let all = localStorage.getItem('movie')? JSON.parse(localStorage.getItem('movie')):[];
    const [check,setCheck] = useState([]);
    const [search,setSearch]=useState("");
    const [filter,setFilter]=useState([]);

    const handleSubmit = (category) =>{
      setCheck(category);
    }

    const menu =check
    ? Data.filter(v=>v.category === check)
    : Data;

    useEffect(()=>{
      let userserach = all.filter((v)=>{
        return v.name.toLowerCase().includes(search.toLowerCase());
      })
      setFilter(userserach)
    },[search])

    useEffect(() => {
      const filtermenu = menu.filter(v => v.name.toLowerCase().includes(search.toLowerCase()));
      setFilter(filtermenu);
    }, [search, menu]);
    return(
     <>
     <nav class="navbar navbar-expand-lg ">
     <div class="container">
        <h3 class="navbar-brand text-white">Movie App</h3>
      <form class="d-flex">
      <input type='text' onChange={(e)=>setSearch(e.target.value)} value={search} placeholder='Enter Name'/>
        <button class="btn" type="button">Search</button>
      </form>

  </div>
</nav>
        <center>
          <div classNameName='continer row'>
            <div className='col'>
              <div className='btn1'>
                <button onClick={()=>handleSubmit('genres')}>Genres</button>
                <button onClick={()=>handleSubmit('trending')}>Trending</button>
                <button onClick={()=>handleSubmit('upcoming')}>Upcoming</button>
                <button onClick={()=>handleSubmit('favorite')}>Favorite</button>
                <button onClick={()=>handleSubmit()}>All</button>
              </div>
            </div>
            <div className='col-8'>
            {
              filter.map((v)=>(
                    <div className="card col-3">
                      <img src={v.img} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="name">{v.name}</h5>
                        <p className="card-text"></p>
                      </div>
                    </div>
              ))
            }
            </div>
          </div>
        </center>
     </>
    )
}
export default Movie;