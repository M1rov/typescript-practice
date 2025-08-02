type EventName = 'click' | 'change' | 'blur';

type EventHandler = `on${EventName}`

type UserId = `id_${number}`