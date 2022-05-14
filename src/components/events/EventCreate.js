import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { useCreateEventMutation } from "../../app/api/event";
import { DatePicker, Space } from "antd";
import moment from "moment";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import { LatLng } from "leaflet";
import L from 'leaflet';
import marker from '../../assets/icon.png';

const myIcon = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor:  [-0, -0],
    iconSize: [32,45],     
});


function LocationMarkers({ markers, setMarkers }) {

    console.log(markers)
  
    const map = useMapEvents({
      click(e) {
        markers.push(e.latlng);
        setMarkers((prevValue) => [e.latlng]);
      }
    });
  
    return (
      <React.Fragment>
        {markers.map(marker => <Marker  icon={myIcon} position={marker} ></Marker>)}
      </React.Fragment>
    );
  }

const { RangePicker } = DatePicker;
const position = [43.23578869845917, 76.8951965880626];

const EventCreate = ({ refetch }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fetchCreateEvent, { isSuccess }] = useCreateEventMutation();
  const initialMarkers = [new LatLng(51.505, -0.09)];
  const [markers, setMarkers] = useState(initialMarkers);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log(moment(values.started_at).toISOString());
    const [coordinate] = markers;


    

    const data = {
      ...values,
      latitude: coordinate.lat,
      longitude: coordinate.lng,
      startedAt: moment(values.started_at).toISOString(),
      endedAt: moment(values.ended_at).toISOString(),
      creatorId: "456asfadsf3f4s",
    };
    fetchCreateEvent(data);
    refetch();
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess]);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Создать
      </Button>
      <Modal
        title={`Создание ивента`}
        okText={"Создать"}
        visible={isModalVisible}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Заголовок"
            name="label"
            rules={[{ required: true, message: "Причина" }]}
          >
            <Input />
          </Form.Item>
          <Space>
            <Form.Item
              label="Дата начало"
              name="started_at"
              rules={[{ required: true, message: "Причина" }]}
            >
              <DatePicker
                placeholder="Дата начало"
                format="YYYY-MM-DD HH:mm"
                showTime
              />
            </Form.Item>
            <Form.Item
              label="Дата конца"
              name="ended_at"
              rules={[{ required: true, message: "Причина" }]}
            >
              <DatePicker
                placeholder="Дата конца"
                format="YYYY-MM-DD HH:mm"
                showTime
              />
            </Form.Item>
          </Space>
          <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{height: '400px'}}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarkers markers={markers} setMarkers={setMarkers} />
          </MapContainer>
          {/* <Form.Item
            label="Широта"
            name="latitude"
            rules={[{ required: true, message: "Причина" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Долгота"
            name="longitude"
            rules={[{ required: true, message: "Причина" }]}
          >
            <Input />
          </Form.Item> */}
          <Form.Item style={{marginTop: 20, textAlign: 'right'}}>
            <Button type="primary" htmlType="submit">
              Создать
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EventCreate;
