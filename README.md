# Project Info
- Title: SiteVibes
- Owner: Mike Matker
- Duration: 3 sprints (6 weeks)
- Collaborators:
  + Hau Nguyen (PM)
  + Vien Pham (Dev)
  + Dat Nguyen (Dev)
  + Tri Nguyen (Dev)
  + Nhi Nguyen (Tester)

# Technology
- Django Rest Framework
- React
- Redux
- PostgreSQL
- Docker

# Prerequisite
- Docker and Docker compose

# Development Guide and Coding Convention

## Client site

* Reducers:
  - Action name:
  > const SECTION_UPDATE = 'sections/UPDATE';
  - Action Creator name: Please use this pattern to define a action creator: `reducer name + action name`
  > const sectionsExamsScoresGet = sectionId => ({
              type: SECTIONS_EXAMS_SCORES_GET,
              sectionId,
     });
  - Please define action creators than export in `const actions`, the same with selectors
  - index file for export
* Components: 
  - Use PascalCase pattern and do not create multiple component with the same name
  > export default class SectionDetail extends Component
  - Add `index.js` file for default export
  - File and component name must be the same
  - Structure of component file (Contructor, React Lifecycle(ComponentDidMount, DidUpdate, ...), Other methods, render methods)
* Containers
  - Use PascalCase pattern and do not create multiple component with the same name
  - Add `index.js` file for default export
  - If the container requires use `actions` and `selectors` variable from reducers, please rename actions and selectors variables following pattern `reducer name + actions/selectors`
  - The containers and components must have the same name
* Sagas
  - Reducer and Saga must have the same name
  - index file for export
  
* Maximum 1 child level folder in component and container
