import './location.css';
import { Map, Marker } from "pigeon-maps";

const Location = () => {
  return (
    <>
      <div className='map'>
        <Map height={300} defaultCenter={[-1.554201096178726, 36.945758184268776]} defaultZoom={15}>
          <Marker width={50} anchor={[-1.554201096178726, 36.945758184268776]} />
        </Map>
      </div>
    </>
  )
}

export default Location;