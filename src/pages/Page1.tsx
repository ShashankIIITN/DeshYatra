import { useEffect } from "react"
import StCards from "../components/StCards"
import '../css/extra.css'

// const toursData = [{
//   "title": "My Tour1",
//   "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aut, possimus cumque aliquam odit officiis enim sequi maxime alias laboriosam sunt laudantium similique nemo unde quis accusamus voluptate, illo quos omnis. Nisi possimus recusandae dignissimos praesentium minima officiis veniam explicabo ducimus repudiandae rem beatae, vitae optio quos? Beatae, eius autem."
// },
// {
//   "title": "My Tour1",
//   "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aut, possimus cumque aliquam odit officiis enim sequi maxime alias laboriosam sunt laudantium similique nemo unde quis accusamus voluptate, illo quos omnis. Nisi possimus recusandae dignissimos praesentium minima officiis veniam explicabo ducimus repudiandae rem beatae, vitae optio quos? Beatae, eius autem."
// },
// {
//   "title": "My Tour1",
//   "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aut, possimus cumque aliquam odit officiis enim sequi maxime alias laboriosam sunt laudantium similique nemo unde quis accusamus voluptate, illo quos omnis. Nisi possimus recusandae dignissimos praesentium minima officiis veniam explicabo ducimus repudiandae rem beatae, vitae optio quos? Beatae, eius autem."
// },
// {
//   "title": "My Tour1",
//   "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aut, possimus cumque aliquam odit officiis enim sequi maxime alias laboriosam sunt laudantium similique nemo unde quis accusamus voluptate, illo quos omnis. Nisi possimus recusandae dignissimos praesentium minima officiis veniam explicabo ducimus repudiandae rem beatae, vitae optio quos? Beatae, eius autem."
// }
// ]

function Page1() {

  useEffect(() => {

    const lines = document.querySelectorAll('.line');
    const diamonds = document.querySelectorAll('.diamond'); 
    const cards = document.querySelectorAll('.card'); 

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
      })
    }, {
      threshold:1
    })
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle('showDiamond', entry.isIntersecting);
        if (entry.isIntersecting) observer2.unobserve(entry.target);
      })
    }, {
      threshold: 1
    })
    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle('showCard', entry.isIntersecting);
        if (entry.isIntersecting) observer3.unobserve(entry.target);
      })
    }, {
      threshold: 1
    })

    lines.forEach((_, ind) => {
      observer.observe(lines[ind]);
    })
    diamonds.forEach((_, ind) => {
      observer2.observe(diamonds[ind]);
    })
    cards.forEach((_, ind) => {
      observer3.observe(cards[ind]);
    })
    // observer.observe(diamonds[ind]);



    return () => {

    }
  }, [])

  return (
    <div className=" w-full bg-black/55 flex flex-col  items-center">
      <h1 className="m-10 font-mono text-white font-extrabold text-5xl">Our Tours</h1>

      <div className="timeline flex flex-col w-full relative items-center">

        {/* {
          toursData.map((el, ind) =>
          )
        } */}
        <StCards title={"my tour"} Description={"my des"} pos="left" img="card-img1" />
        <StCards title={"my tour"} Description={"my des"} pos="right" img="card-img1" />
        <StCards title={"my tour"} Description={"my des"} pos="left" img="card-img1" />
        <StCards title={"my tour"} Description={"my des"} pos="right" img="card-img1" />
        <StCards title={"my tour"} Description={"my des"} pos="left" img="card-img1" />

      </div>
    </div>
  )
}

export default Page1