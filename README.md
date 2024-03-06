# Vue Recycle Widget Project

## Project Description

This Vue.js project is designed to showcase customizable widgets that promote environmental actions, such as recycling plastic bottles, planting trees, and offsetting carbon emissions. Each widget is represented by a `RecycleWidget` component, displaying the action taken (e.g., collects, plants, offsets), the amount of the action (e.g., 100 plastic bottles), and options to customize the widget's appearance and functionality.

## Features

- **Customizable Widgets**: Each widget can be customized to display different environmental actions, amounts, and colors.
- **Tooltip Information**: Widgets include tooltips providing additional information about the widget functionality and customization options.
- **Dynamic Interaction**: Users can interact with the widgets to toggle linking to a public profile, change the badge color, and activate or deactivate the badge.

## Project Structure

- `src/`
  - `components/`
    - `RecycleWidget.vue`: Defines the structure and functionality of each widget.
    - `GreensparkLogo.vue`: A component representing the logo used in each widget (not provided).
  - `App.vue`: The main application component that utilizes the `RecycleWidget` components.
- `assets/`: Contains static assets such as images and logos (e.g., the info icon used in tooltips).

## Setup and Installation

To run this project, you will need Node.js and npm installed on your system.

1. Clone the repository to your local machine.
2. Navigate to the project directory and install dependencies:
   npm install
3. Serve the project locally:
   npm run serve
4. Open your web browser and go to the URL provided in the terminal to view the project.

## Usage

The main interface is presented in `App.vue`, where multiple `RecycleWidget` components are rendered, each initialized with different props to represent various environmental actions. Users can interact with each widget to customize its appearance and functionality.

## Customization

Widgets can be customized through the following props:

- `id`: Unique identifier for each widget.
- `type`: Type of environmental action (e.g., "plastic bottles", "trees", "carbon").
- `amount`: The amount associated with the action.
- `action`: Verb describing the action (e.g., "collects", "plants", "offsets").
- `defaultColor`: Initial color of the widget badge.
- `defaultLinked`: Determines if the widget is initially linked to a public profile.
- `defaultActive`: Indicates if the widget badge is initially active.

## Contributing

Contributions to enhance the project are welcome. Please follow the standard fork-and-pull request workflow to submit your contributions.

## License
MIT