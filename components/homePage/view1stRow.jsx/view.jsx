import style from './view.module.css'

const viewListData = [
  {
    image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Men'
  },
  {
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Women'
  },
  {
    image: 'https://images.pexels.com/photos/834507/pexels-photo-834507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Kids'
  },
  {
    image: 'https://images.pexels.com/photos/2356344/pexels-photo-2356344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Shirts'
  },
  {
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Pants'
  },
  {
    image: 'https://images.pexels.com/photos/8979071/pexels-photo-8979071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Sneakers'
  },
  {
    image: 'https://images.pexels.com/photos/1445696/pexels-photo-1445696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Heels'
  },
  {
    image: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Accessories'
  },
]

export default function View() {

  return (
    <main className={style.main}>

      {
        viewListData.map((item) => (
          <ViewList
            image={item.image}
            name={item.name}
          />
        ))
      }
    </main>
  )
}

const ViewList = function (props) {

  const { image, name } = props

  return (
    <div className={style.view}>
      <div
        style={{
          background: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}>
          
      </div>
      <h3>{name}</h3>
    </div>
  )
}