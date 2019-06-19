import route from './router';

//User
import Register from '/imports/client/components/users/Register';
import Login from '/imports/client/components/users/Login';
import Home from '/imports/client/components/home/Home';

// donuts
import Donuts from '/imports/client/components/donuts/Donuts';
import DonutsEdit from '/imports/client/components/donuts/DonutsEdit';


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



