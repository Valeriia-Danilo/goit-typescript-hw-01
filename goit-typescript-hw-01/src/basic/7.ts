type details = {
    createAt: Date;
    updateAt: Date;
}


type options = {
    title: string;
    likes: number;
    accounts: string[];
    status: 'open' | 'close';
    details?: details;
}


const page1: options = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: options = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}