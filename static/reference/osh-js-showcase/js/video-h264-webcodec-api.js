import SosGetResult from 'osh-js/core/datasource/sos/SosGetResult.datasource.js';
import VideoDataLayer from 'osh-js/core/ui/layer/VideoDataLayer';
import VideoView from "osh-js/core/ui/view/video/VideoView";
import {Mode} from "osh-js/core/datasource/Mode";
import DataSynchronizer from "osh-js/core/timesync/DataSynchronizer";

// create data source for UAV camera
let videoDataSource = new SosGetResult("drone-Video", {
  endpointUrl: "sensiasoft.net/sensorhub/sos",
  offeringID: "urn:mysos:solo:video2",
  observedProperty: "http://sensorml.com/ont/swe/property/VideoFrame",
  startTime: "2015-12-19T21:04:30Z",
  endTime: "2015-12-19T21:09:19Z",
  mode: Mode.REPLAY,
  tls: true
});

// show it in video view using FFMPEG JS decoder
let videoView = new VideoView({
  container: 'video-h264-container',
  css: "video-h264",
  name: "UAV Video",
  showTime: true,
  showStats: true,
  useWebCodecApi: true,
  layers: [
    new VideoDataLayer({
      dataSourceId: videoDataSource.id,
      getFrameData: (rec) => rec.videoFrame,
      getTimestamp: (rec) => rec.timestamp
    })
  ]
});

// start streaming
const dataSynchronizer = new DataSynchronizer({
  masterTimeRefreshRate: 250,
  replaySpeed: 2.5,
  startTime: "2015-12-19T21:04:30Z",
  endTime: "2015-12-19T21:09:19Z",
  dataSources: [
    videoDataSource
  ]
});
dataSynchronizer.connect()
