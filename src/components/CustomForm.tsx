import React from 'react';
import { Form, ButtonToolbar, Button, Input } from 'rsuite';

const Textarea = React.forwardRef((props, ref) => (
  <Input {...props} as="textarea" inputRef={ref} />
));

Textarea.displayName = 'Textarea'; // Agrega un nombre de visualización al componente

const CustomForm = () => {
  const handleSubmit = () => {
    // Aquí puedes manejar la lógica para enviar el formulario
    console.log('Formulario enviado');
  };

  const handleCancel = () => {
    // Aquí puedes manejar la lógica para cancelar el formulario
    console.log('Formulario cancelado');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Form onSubmit={handleSubmit} className="bg-blue-500 text-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-lg" style={{ backgroundColor: '#111827' }}>
        <Form.Group controlId="name">
          <Form.ControlLabel>Username</Form.ControlLabel>
          <Form.Control name="name" className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 w-full" />
          <Form.HelpText>Username is required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Form.Control name="email" type="email" className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 w-full" />
          <Form.HelpText tooltip>Email is required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.ControlLabel>Password</Form.ControlLabel>
          <Form.Control name="password" type="password" autoComplete="off" className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 w-full" />
        </Form.Group>
        <Form.Group controlId="textarea">
          <Form.ControlLabel>Textarea</Form.ControlLabel>
          <Form.Control name="textarea" accepter={Textarea} className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 w-full" />
        </Form.Group>
        <Form.Group>
          <ButtonToolbar>
            <Button type="submit" appearance="primary" className="mr-2">Submit</Button>
            <Button type="button" appearance="default" onClick={handleCancel} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Cancel</Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </div>
  );
};

export default CustomForm;
