import {
  ActiveButton,
  Avatar,
  AvatarBox,
  Button,
  CardStyled,
  Chat,
  List,
  Logo,
  Section,
  Text,
} from './Card.styled';
import logo from '../../image/logo.png';
import chat from '../../image/chat.png';
import line from '../../image/line.png';
import avatar from '../../image/avatar.png';
import { useState } from "react";
import { useEffect } from 'react';

export const Card = () => {
  const [follow, setFollow] = useState(JSON.parse(localStorage.getItem('follow')))
  const [followers, setFollowers] = useState(!follow ? (100500) : (JSON.parse(localStorage.getItem('followers'))));

  const onFollow = () => {
      setFollowers(prevState => prevState + 1);
      setFollow(true)
    };

    const onUnFollow = () => {
      setFollowers(prevState => prevState - 1);
      setFollow(false)
    };

  useEffect(() => {
    localStorage.setItem('followers', JSON.stringify(followers));
    localStorage.setItem('follow', JSON.stringify(follow));
  }, [followers, follow])


  return (
    <Section>
      <CardStyled>
        <div style={{ height: 214 }}>
          <Logo src={logo} alt="logo" />
          <Chat src={chat} alt="chat" />
        </div>
        <AvatarBox>
          <img src={line} alt="line" />
          <Avatar src={avatar} alt="avatar" />
        </AvatarBox>
        <div>
          <List>
            <li>
              <Text>777 tweets</Text>
            </li>
            <li>
              <Text>{followers.toLocaleString('ja-JP')} Followers</Text>
            </li>
          </List>
          {follow ? (
            <ActiveButton type="button" onClick={onUnFollow}>
              Following
            </ActiveButton>
          ) : (
            <Button type="button" onClick={onFollow}>
              Follow
            </Button>
          )}
        </div>
      </CardStyled>
    </Section>
  );
};
