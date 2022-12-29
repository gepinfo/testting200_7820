#!bin/bash

echo "--------------------------"
echo "Fastlane Android deployment"
echo "--------------------------"
echo ""
echo ""
echo "INSTRUCTIONS:"
echo "=> Install Ruby and Fastlane"
echo "=> Install Bundler"
echo "=> Setup your Android Project"
echo "=> Use a Json from 4 to initialize fastlane in project"
sudo apt update
sudo apt install ruby ruby-dev
gem install bundler
bundle install
bundle update
bundle exec fastlane update_plugins 
bundle update fastlane
sudo apt install default-jdk
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64/bin/java
npm install
sudo apt-get update
sudo apt-get install build-essential
sudo gem install google-api-client
sudo gem install fastlane -NV

echo "Ruby and Fastlane has been successfully installed"

cd /devops/mobile/fastlane/android/$ name of project $/android$
echo "Setting up Fastlane..."    

fastlane init

echo "Build the bundle "
chmod +x ./gradlew
./gradlew test
./gradlew build
./gradlew bundleRelease 

  echo "app bundle is built successfully"
;
esac