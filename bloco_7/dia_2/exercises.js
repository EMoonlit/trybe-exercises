const customer = {
    firstName: 'Roberto',
    
    age: 22,
    job: 'Teacher',
  };
  console.log(customer);

  customer.lastName = 'da Silva';
  console.log(customer);

  const customer2 = {
      firstName: 'Maria',
      age: 23,
      job: 'Medic',
  };
  console.log(customer2);

  customer2['lastName'] = 'Faria';
  console.log(customer2);