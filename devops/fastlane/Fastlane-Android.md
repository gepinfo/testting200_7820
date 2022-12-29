# Fastlane Android Deployment

## Prerequisites:
- Install Ruby and Fastlane
- Install Bundler
- Setup Android Project
- Use a Json to initialize fastlane in project


### Install ruby and ruby-dev headers

```sh
$ sudo apt install ruby ruby-dev
```


```sh
$ vi ~/.profile
```
- Add following to top of your “~/.profile” file
```sh
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
```
- Install Build essentials

```sh
sudo apt-get update
sudo apt-get install build-essential
```

- Install Fastlane.
```sh
$ sudo gem install fastlane -NV

$ fastlane -v
```
- Edit Local.Properties


```sh
sdk.dir=/home/yourlocation/Android/Sdk

```
- Edit App file and change the path of the json key
```sh
$ json_key_file("/home/lenovo/Videos/gepMobileWebview")
```
- Edit Fast file and add the code
```
default_platform(:android)

platform :android do
  desc "Runs all the tests"
  lane :test do
    gradle(task: "test")
  end

  desc "Submit a new Beta Build to Crashlytics Beta"
  lane :beta do
    gradle(task: "clean bundleRelease")
    crashlytics
  
    # sh "your_script.sh"
    # You can also use other beta testing services here
  end

  desc "Deploy a new version to the Google Play"
  lane :deploy do
    gradle(task: "clean bundleRelease")
    upload_to_play_store
  end
end
```
 - Now build the bundle
 ```sh
  $ ./gradlew bundleRelease
