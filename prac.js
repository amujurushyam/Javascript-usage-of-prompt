
    let username=prompt("Enter username:")
    let product = prompt("Enter product name:")
    let price = prompt("Enter price :")
    let occassion = prompt("Enter occassion :")
    let platform = prompt("Enter platform name :")

        let obj=
        {
            name:username,
            product:product,
            price:price,
            day:"monday",
            occassion:occassion,
            platform:platform,
        }
        alert(`${obj.name} has purchased a ${obj.product} which cost  ${obj.price} will be delivery on ${obj.day} on the occassion of  ${obj.occassion} in ${obj.platform}`)