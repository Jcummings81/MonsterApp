class ApplicationController < ActionController::API
    include
    ActionController::HttpAuthentication::Token::ActionControllerMethods
end
