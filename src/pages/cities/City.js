import London from '../../images/london.jpg'
import Barcelona from '../../images/barcelona.jpg'
import Capadocia from '../../images/capadocia.jpg'
import Cards from '../../components/Cards'

export default function City() {
    return (
        <div className='card-container d-flex justify-content-evenly mt-2'>
      <Cards 
      title = "London"
      text = "A vibrant and cosmopolitan city, London is famous for its iconic landmarks such as Buckingham Palace, Big Ben and the London Eye."
      image =  {London}
      city = 'london'/>
      <Cards 
      title = "Barcelona"
      text = "A vibrant and colorful city, Barcelona is home to the famous works of architect Antoni Gaudi, such as the Sagrada Familia. "
      image = {Barcelona}
      city = 'barcelona'
      />
      <Cards 
      title = "Cappadocia"
      text = "Explore the mystical landscape of Cappadocia, where erosion has sculpted unique fairy chimneys, cave dwellings and underground cities."
      image = {Capadocia}
      city = 'cappadocia'
      />
            </div>
    )
}