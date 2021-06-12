import React, { useEffect, useState } from 'react'
import CityService from '../services/cityService'

export default function CityList() {
    const [cities, setCities] = useState([])

    useEffect(() => {
       let cityService = new CityService();
       cityService.setCities().then(result=> setCities(result.data.data))
    }, [])
    return (
        <div>
            
        </div>
    )
}
