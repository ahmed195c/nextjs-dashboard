type UserType = {
    dob: string;
    firstName: string;
    userBio: string;
  };
  
  interface UserProps {
    user: UserType;
  }
  
  const UserProfile: React.FC<UserProps> = ({ user }): JSX.Element => {
    return (
      <>
        {user.firstName} <br />
        {user.dob} <br />
        {user.userBio}
      </>
    );
  };


  interface BioProps {
    bio: string;
    open: boolean;
  }
  
  const EditBio: React.FC<BioProps> = (props): JSX.Element => {
    return (
      <>
        {props.bio} <br />
        {props.open}
      </>
    );
  };
  
  