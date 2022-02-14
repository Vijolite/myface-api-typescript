import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { User } from "./user.jsx";
import {BrowserRouter} from 'react-router-dom';


test("renders message", () => {
  // Arrange
  const user = {
    id:1,
    name: "User1",
    username: "user name",
    email: "user@user",
    postprofileImageUrl: "User image 1",
  };

  // Act
  render(<BrowserRouter><User user={user} /></BrowserRouter>
    );
  const messageElement = screen.getByText(/user name/i);

  // render(<User user={user} />);
  // const messageElement = screen.getByText(/user name/i);

  // Assert
  expect(messageElement).toBeInTheDocument();
});

test("matches snapshot", () => {
  // Arrange
  const user = {
    id:1,
    name: "User1",
    username: "user name",
    email: "user@user",
    postprofileImageUrl: "User image 1",
  };

  // Act
  const tree = renderer
    .create(<BrowserRouter><User user={user} /></BrowserRouter>)
    .toJSON();

  // Assert
  expect(tree).toMatchSnapshot();
});

