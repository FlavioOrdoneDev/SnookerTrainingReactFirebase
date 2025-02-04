import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import { firebase } from '../../../firebase';

const AdminNav = () => {

    const links = [
        {
            title: 'Categorias',
            linkTo: '/admin_players'
        },
        {
            title: 'Rotinas',
            linkTo: '/admin_rotinas'
        },
        {
            title: 'Treinos',
            linkTo: '/admin_matches/edit_match'
        },        
        {
            title: 'Resultados',
            linkTo: '/admin_players/add_player'
        }
    ]

    const style = {
        color: '#ffffff',
        fontWeight: '300',
        borderBottom:'1px solid #353535'
    }


    const renderItems = () => (
        links.map(link => (
            <Link to={link.linkTo} key={link.title}>
                <ListItem button style={style}>
                    {link.title}
                </ListItem>
            </Link>
        ))
    )

    const logoutHandler = () => {
        firebase.auth().signOut().then(()=>{
            console.log('Log out succesfull')
        },(error)=>{
            console.log('Error logging out')
        })
    }


    return (
        <div>
            {renderItems()}
            <ListItem button style={style} onClick={()=> logoutHandler()}>
                Log out
            </ListItem>
        </div>
    );
};

export default AdminNav;