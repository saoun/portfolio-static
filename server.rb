require 'sinatra'

module Sinatra
  class Server < Sinatra::Base
    get "/" do
      erb :index
    end

    get '/about' do
      erb :about
    end

    get '/workshops' do
      erb :workshops
    end

    get '/cv' do
      erb :cv
    end

    get '/projects' do
      erb :projects
    end

    get '/photo' do
      erb :photo
    end

    get '/contact' do
      erb :contact
    end


  end
end
