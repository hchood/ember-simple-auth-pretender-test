class Api::V1::TokensController < ApplicationController
  def create
    # return hard-coded values for testing purposes

    credentials = {
      user_token: 'gvSkMer7hZpw9iZsBZ4r',
      user_id: 3
    }

    render json: credentials, status: 201
  end
end
