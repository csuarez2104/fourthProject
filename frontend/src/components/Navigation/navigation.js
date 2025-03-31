import React, {useState} from 'react';
import avatar from "../../img/avatar.png";
import { menuItems } from "../../utils/menuitems";
import { signout } from '../../utils/icons'
import styled from 'styled-components';

function Navigation({active, setActive}) {

    return (
        <NavStyled>
            <div className="user-container">
                <img src={avatar} alt= "" />
                <div>
                    <h2>Carlos</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? "active": ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}

            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign out
                </li>

             </div>   
        </NavStyled>
    );
}

const NavStyled = styled.div`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-container{
        height: 100px;
        display: flex;
        gap: 1rem;
        align-items: center;
        img{
            width: 70px;
            height: 70px;
            border-radius: 50%;
            object-fit: cover;
            background-color:rgb(241, 235, 238);
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shawdow: 0px 1px 17px rgba(0, 0, 0, 0.6);
        }
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, 0.5);
        }
    }
    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, 0.5);
            padding-left: 1rem;
            position: relative;
            i{
                color: rgba(34, 34, 96, 0.5);
                font-size: 1.5rem;
                transition: all .4s ease-in-out;
            }
        }
    }
    .active{
        color: rgba(34, 34, 96, 1)!important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background-color: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation;