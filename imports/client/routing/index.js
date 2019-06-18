import route from './router';

//User
import Register from '/imports/client/pages/users/Register';
import Login from '/imports/client/pages/users/Login';
import Home from '/imports/client/pages/home/Home';

// donuts
import Donuts from '/imports/client/pages/donuts/Donuts';
import DonutsEdit from '/imports/client/pages/donuts/DonutsEdit';


route('/', Home, {}, {
    name: 'home'
});

route('/login', Login, {}, {
    name: 'login'
});

route('/register', Register, {}, {
    name: 'register'
});

route('/donuts', Donuts, {}, {
    name: 'donuts'
});

route('/donuts', Donuts, {}, {
    name: 'donuts.list'
});

route('/donuts/edit/:_id', DonutsEdit, {}, {
    name: 'donuts.edit'
});



