## NJ Tree Foundation Tree Map Respository

### Setup

#### Prerequisites
1. Please install the Prettier VSCode extension.
2. Head to `File > Preferences > Settings` and search up "Format On Save" and check the box.

#### Set up the Client Subdirectory
1. In the root directory, install the required dependencies with `npm install`.
2. Set up your working diretory to the client subdirectory with `cd ./src`.
3. Run the client development server with `npm start`.

#### Set up the App Subdirectory
1. Set your working directory to the app subdirectory with `cd ./app`.
2. Create a virtual environment with `virtualenv env` and activate it with `./env/scripts/activate`
(i'm sorry if you're a mac user).
3. Install the required dependencies with `pip install -r requirements.txt`.
4. Run the application server with `flask run`.

### Commit Message Conventions

I included a Git commit message linter to ensure that our commit history maintains clean.
I think that it actually takes off some overhead too since we don't need to worry about the structure of our commit messages.

The format for commit messages is as follows:

`<type>(<scope>): <short summary>`

`type` is one of the following

- feat
- fix
- docs
- style
- refactor
- test
- ci
- perf (performance improvements)
- build (changes to the build system)
- temp (temporary commits)

`scope` is the name of the component affected (i.e. `login`, `signup`, etc.)
`short summary` is a short description of the commit (i.e. `fix login bug`)