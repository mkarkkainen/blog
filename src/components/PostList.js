import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

import { Grid, Typography, Card, CardContent} from '@material-ui/core'
import FaceIcon from '@material-ui/icons/Face';
import { withStyles } from "@material-ui/core/styles";
import { Face } from "@material-ui/icons";


const styles = theme => ({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  heading: {
    textTransform: "capitalize"
  },
  post: {
    margin: 8
  }
})

//str.charAt(0).toUpperCase() + str.slice(1)

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    const { classes } = this.props;
    return this.props.posts.map((post) => {
      return (
            <Grid item
              xs={12} md={8}
              className={classes.post}
              key={post.id}
            >
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <FaceIcon />
                  <Typography className={classes.heading} variant="h6" gutterBottom>{post.title}</Typography>
                  <Typography gutterBottom>{(post.body).charAt(0).toUpperCase() + (post.body).slice(1)}</Typography>
                  <UserHeader userId={post.userId} />
                </CardContent>
              </div>
            </Card>

            </Grid>
      );
    });
  }

  render() {
    console.log(this.props.posts);
    return <Grid container justify="center" alignItems="center">{this.renderList()}</Grid>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(withStyles(styles)(PostList));