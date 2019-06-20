import route from './router';

//User
import Auth from '/imports/client/components/users/Auth';
import Home from '/imports/client/components/home/Home';

// donuts
import Donuts from '/imports/client/components/donuts/Donuts';


route('/', Home, {}, {
    name: 'home'
});

route('/login', Auth, {}, {
    name: 'login'
});

route('/register', Auth, {}, {
    name: 'register'
});

route('/donuts', Donuts, {}, {
    name: 'donuts.list'
});
