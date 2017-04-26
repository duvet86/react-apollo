import React, { Component } from "react";
import { gql, graphql } from "react-apollo";

import AddChannel from "./AddChannel";

class ChannelsList extends Component {
  componentDidMount() {
    this.props.subscribeToNewChannels();
  }

  render() {
    const { data } = this.props;
    if (data.loading) {
      return <p>Loading ...</p>;
    }
    if (data.error) {
      return <p>{data.error.message}</p>;
    }
    return (
      <div>
        <AddChannel />
        <ul>
          {data.channels.map(ch => <li key={ch.id}>{ch.name}</li>)}
        </ul>
      </div>
    );
  }
}

export const channelsListQuery = gql`
   query ChannelsListQuery {
     channels {
       id
       name
     }
   }
`;

const channelsSubscription = gql`
    subscription onChannelAdded {
      channelAdded {
        id
        name
      }
    }
`;

const makeQuery = graphql(channelsListQuery, {
  props: props => {
    return {
      data: props.data,
      subscribeToNewChannels: () => {
        return props.data.subscribeToMore({
          document: channelsSubscription,
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) {
              return prev;
            }

            return Object.assign({}, prev, {
              channels: [...prev.channels, subscriptionData.data.channelAdded]
            });
          }
        });
      }
    };
  }
});

export default makeQuery(ChannelsList);
