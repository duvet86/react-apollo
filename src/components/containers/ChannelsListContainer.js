import React, { Component } from "react";
import PropTypes from "prop-types";
import { gql, graphql } from "react-apollo";

import AddChannelContainer from "components/containers/AddChannelContainer";

import ChannelsList from "components/presentationals/ChannelsList";
import Loading from "components/presentationals/Loading";

class ChannelsListContainer extends Component {
  componentDidMount() {
    this.props.subscribeToNewChannels();
  }

  render() {
    const { data } = this.props;
    return (
      <Loading loading={data.loading} error={data.error}>
        <div>
          <AddChannelContainer />
          <ChannelsList channels={data.channels} />
        </div>
      </Loading>
    );
  }
}

ChannelsList.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.string,
    channels: PropTypes.array
  })
};

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

export default makeQuery(ChannelsListContainer);
