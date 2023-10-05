export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': '000dba5225mshe422e6c4bb8e675p105351jsn201028fb5a14',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    })

    const result = await response.json()
    return result
}

